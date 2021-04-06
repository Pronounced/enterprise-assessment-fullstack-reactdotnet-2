using Microsoft.EntityFrameworkCore;

namespace server
{
    public class BlogContext : DbContext
    {
      public DbSet<Blog> blogs { get; set; }

      protected override void OnConfiguring(DbContextOptionsBuilder oB){
        oB.UseMySQL("server=database;user=root;password=test;database=blogmodo");
      }

      protected override void OnModelCreating(ModelBuilder mB){
        base.OnModelCreating(mB);

        mB.Entity<Blog>(entity => {
          entity.HasKey(e => e._id);
          entity.Property(e => e.author).IsRequired();
          entity.Property(e => e.body).IsRequired();
          entity.Property(e => e.title).IsRequired();
          entity.Property(e => e.views).IsRequired();
          entity.Property(e => e.created_At).IsRequired();
          entity.Property(e => e.imageUrl);
        });
      }

    }
}