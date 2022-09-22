using System;
using System.Collections.Generic;

#nullable disable

namespace DigitalBooksApi.Models
{
    public partial class TblBook
    {
        public int BksBookId { get; set; }
        public string BksTitle { get; set; }
        public string BksCategory { get; set; }
        public string BksImage { get; set; }
        public int? BksPrice { get; set; }
        public string BksPublisher { get; set; }
        public string BksActiveContent { get; set; }
        public string BksContent { get; set; }
        public int? BksAuthorId { get; set; }
        public DateTime? BksPublishedDate { get; set; }
        public int? BksCreatedBy { get; set; }
        public DateTime? BksCreatedDate { get; set; }
        public string BksBooksLogo { get; set; }
    }
}
