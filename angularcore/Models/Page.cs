﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angularcore.Models
{
    public class Page
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Content { get; set; }
        public string HasSidebar { get; set; }
    }
}
