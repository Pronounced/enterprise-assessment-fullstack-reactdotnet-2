using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;

namespace server.Controllers
{
    public class BlogController : ControllerBase
    {
        public BlogContext blogContext = new BlogContext();

        [HttpGet]
        [Route("api/blogs")]
        public IEnumerable<Blog> Get()
        {
            var blogs = blogContext.blogs.Include(b => b);
            return blogs;
        }

        [HttpPatch]
        [Route("api/blogs/{id}")]
        public void Patch(string id)
        {
            var post = blogContext.blogs.Where(b => b._id == id).FirstOrDefault();
            post.views++;
            blogContext.SaveChanges();
        }
    }
}