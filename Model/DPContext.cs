﻿using Finalss.Model;
using Microsoft.EntityFrameworkCore;


namespace Finalss.Models;

public class DPContext : DbContext
{
    public DbSet<Patient> Patient_set { get; set; }
    public DbSet<Doctor> Doctor_set { get; set; }
    public DbSet<User> User_set { get; set; }

    public DPContext(DbContextOptions options) : base(options) { }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Patient>()
            .HasKey(p => new { p.PatientId, p.DoctorID });
    }

}