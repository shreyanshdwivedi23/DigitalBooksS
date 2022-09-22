using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DigitalBooksApi.Models
{
    public partial class DigitalBooksDBContext : DbContext
    {
        public DigitalBooksDBContext()
        {
        }

        public DigitalBooksDBContext(DbContextOptions<DigitalBooksDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblLogin> TblLogins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=CTSDOTNET849;Initial Catalog=DigitalBooksDB; User ID=sa; Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Tbl_Logi__CB9A1CFF0E36681C");

                entity.ToTable("Tbl_Login");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("userEmail");

                entity.Property(e => e.UserFullname)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("userFullname");

                entity.Property(e => e.UserMobileNo)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("userMobileNo");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("userName");

                entity.Property(e => e.UserPassword)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("userPassword");

                entity.Property(e => e.UserType)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("userType");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
