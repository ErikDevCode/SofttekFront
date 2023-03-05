using FrontEnd.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace FrontEnd.Utility
{
    public class Util<T> where T : class
    {
        private readonly IHttpClientFactory httpClientFactory;

        public Util(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;
        }

        public async Task<ModelStateError> LoginAsync(string url, T entity)
        {
            var request = new HttpRequestMessage(HttpMethod.Post, url);

            request.Content = new StringContent(JsonConvert.SerializeObject(entity), Encoding.UTF8, Resource.ContentType);

            var httpClient = httpClientFactory.CreateClient();

            HttpResponseMessage response = await httpClient.SendAsync(request);

            if (response.StatusCode == HttpStatusCode.NotFound ||
                response.StatusCode == HttpStatusCode.BadRequest ||
                response.StatusCode == HttpStatusCode.InternalServerError)
            {
                var json = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ModelStateError>(json);
            }

            var content = await response.Content.ReadAsStringAsync(); //contendra el usuario, token y lista de errores
            var modelError = JsonConvert.DeserializeObject<ModelStateError>(content);

            modelError.Response = new Response()
            {
                Errors = new List<Errors>()
            };

            return modelError;

        }
    }
}
