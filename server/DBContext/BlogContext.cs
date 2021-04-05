using Microsoft.EntityFrameworkCore;

namespace server
{
    public class BlogContext : DbContext
    {
      public DbSet<Blog> Blog { get; set; }

      protected override void OnConfiguring(DbContextOptionsBuilder oB){
        oB.UseMySQL("server=127.0.0.1;user=root;port=3306;database=blogmodo");
      }

      protected override void OnModelCreating(ModelBuilder mB){
        base.OnModelCreating(mB);

        mB.Entity<Blog>(entity => {
          entity.HasKey(e => e._id);
          entity.Property(e => e.author).IsRequired();
          entity.Property(e => e.body).IsRequired();
          entity.Property(e => e.title).IsRequired();
          entity.Property(e => e.views).IsRequired();
          entity.Property(e => e.createdAt).IsRequired();
          entity.Property(e => e.imageUrl);
        });
      }

    }
}