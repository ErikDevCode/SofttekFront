using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd.Models
{
    public class ModelStateError
    {
        public Response Response { get; set; }
        public string Token { get; set; }

        public int Codigo { get; set; }
        public string UserName { get; set; }

        public int IdUsuario { get; set; }
        public int IdPerfil { get; set; }

        public int IdEmpleado { get; set; }

        public string VcAlias { get; set; }

        public string IpMaquina { get; set; }

        public string validar { get; set; }
        public List<string> Roles { get; set; }
    }
}
