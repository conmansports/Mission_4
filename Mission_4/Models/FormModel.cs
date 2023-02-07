using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_4.Models
{
    public class FormModel
    {
        [Range(0, 100)]
        public int Assig { get; set; }
        [Range(0, 100)]
        public int Group { get; set; }
        [Range(0, 100)]
        public int Quiz { get; set; }
        [Range(0, 100)]
        public int Mid { get; set; }
        [Range(0, 100)]
        public int Final { get; set; }
        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
