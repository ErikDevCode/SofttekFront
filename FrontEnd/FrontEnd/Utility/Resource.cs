using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd.Utility
{
    public class Resource
    {
        public const string APIBaseUrl = "http://localhost:9350/";
        public const string LoginAPIUrl = APIBaseUrl + "api/Login/UserLogin";
        //public const string PaginasAPIUrl = APIBaseUrl + "api/Paginas/Listar/Activo";
        public const string ContentType = "application/json";
    }
}
