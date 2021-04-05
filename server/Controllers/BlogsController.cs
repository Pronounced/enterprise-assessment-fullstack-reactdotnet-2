using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace server.Controllers
{

    public class BlogController : ControllerBase
    {
        [HttpGet]
        [Route("api/blogs")]
        public IEnumerable<Blog> Get()
        {
            return FakeData.getBlogs();
        }

        [HttpPatch]
        [Route("api/blogs/{id}")]
        public void Patch(string id)
        {
            FakeData.PatchBlog(id);
        }
    }
}