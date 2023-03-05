using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd.Filters
{
    public class Seguridad : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            Console.WriteLine("");
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            var usu = context.HttpContext.Session.GetString("Token");
            if (usu == "" || usu == null)
            {
                context.Result = new RedirectResult("Login");
            }
        }
    }
}
