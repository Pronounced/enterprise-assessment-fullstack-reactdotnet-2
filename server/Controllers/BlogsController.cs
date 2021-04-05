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
        private readonly BlogContext blogContext;
        public List<Blog> blogs { get; set; }

        public BlogController(){
            blogContext = new BlogContext();
        }

        [HttpGet]
        [Route("api/blogs")]
        public IEnumerable<Blog> Get()
        {
            blogs = blogContext.Blog.ToList();
            return blogs;
        }

        [HttpPatch]
        [Route("api/blogs/{id}")]
        public void Patch(string id)
        {
            FakeData.PatchBlog(id);
        }
    }
}