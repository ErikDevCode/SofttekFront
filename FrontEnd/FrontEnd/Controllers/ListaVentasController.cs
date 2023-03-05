using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd.Controllers
{
    public class ListaVentasController : Controller
    {
        // GET: ListaVentasController
        public ActionResult Index()
        {
            return View();
        }

        
    }
}
