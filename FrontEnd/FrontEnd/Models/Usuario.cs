using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd.Models
{
    public class Usuario
    {
        //public Usuario()
        //{
        //    Errors = new List<Errors>();
        //}

        //public int IdUsuario { get; set; }

        [Required(ErrorMessage = "El Usuario es requerido")]
        public string credential { get; set; }
        [Required(ErrorMessage = "La Contraseña es requerida")]
        public string password { get; set; }

        //public List<Errors> Errors { get; set; }
    }
}
