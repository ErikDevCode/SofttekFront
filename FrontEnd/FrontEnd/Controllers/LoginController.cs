using FrontEnd.Models;
using FrontEnd.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace FrontEnd.Controllers
{
    public class LoginController : Controller
    {

        private readonly Util<Usuario> util;
        public LoginController(IHttpClientFactory httpClientFactory)
        {
            util = new Util<Usuario>(httpClientFactory);
        }

        // GET: LoginController
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                var modelStateError = await util.LoginAsync(Resource.LoginAPIUrl, usuario);

                if (modelStateError.Token is null)
                {
                    return RedirectToAction("Index", "Login");
                }

                IPHostEntry host;
                string localIP = "";
                host = Dns.GetHostEntry(Dns.GetHostName());
                foreach (IPAddress ip in host.AddressList)
                {
                    if (ip.AddressFamily.ToString() == "InterNetwork")
                    {
                        localIP = ip.ToString();
                    }
                }

                modelStateError.validar = "3";
                modelStateError.IpMaquina = localIP;


                HttpContext.Session.SetString("Token", modelStateError.Token);
                HttpContext.Session.SetString("Codigo", modelStateError.Codigo.ToString());
                HttpContext.Session.SetString("IpMaquina", modelStateError.IpMaquina.ToString());
                return RedirectToAction("Index", "ListaVentas");




            }

            return View(usuario);
        }
    }
}
