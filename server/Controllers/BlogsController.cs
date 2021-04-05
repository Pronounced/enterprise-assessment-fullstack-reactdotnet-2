using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace server.Controllers
{
    [ApiController]
    [Route("api/blogs")]
    public class BlogController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Blog> Get()
        {
            return FakeData.getBlogs();
        }

    }
}