import React from 'react';
import { Award, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import dart from "../assets/dart.png";
import flutterPemula from "../assets/flutter pemula.png";
import fundamentalFlutter from "../assets/fundamental-flutter.png";
import machineLearning from "../assets/machine-learning.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import gitGithub from "../assets/git-github.png";
import sql from "../assets/sql.png";

const certifications = [
    {
      name: "Pemrograman Dart",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: dart, 
      verifyUrl: "https://www.dicoding.com/certificates/07Z6JL8VJXQR", 
    },
    {
      name: "Membuat Aplikasi Flutter untuk Pemula", // Judul diperpanjang untuk tes
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: flutterPemula,
      verifyUrl: "https://www.dicoding.com/certificates/GRX5JK2LKX0M", 
    },
    {
      name: "Fundamental Flutter",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: fundamentalFlutter,
      verifyUrl: "https://www.dicoding.com/certificates/GRX5J9RNYX0M",
    },
    {
      name: "Machine Learning dengan Flutter",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: machineLearning,
      verifyUrl: "https://www.dicoding.com/certificates/GRX5J2W2KX0M", 
    },
    {
      name: "Fundamental Express.js",
      issuer: "Codepolitan",
      date: "2024",
      image: express,      
      verifyUrl: "https://codepolitan.com/c/VBX8IG2",
    },
    {
      name: "Fundamental MongoDB",
      issuer: "Codepolitan",
      date: "2024",
      image: mongodb, 
      verifyUrl: "https://codepolitan.com/c/NPX8KZH",
    },
    {
      name: "Belajar Git dan Github",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: gitGithub,
      verifyUrl: "https://www.dicoding.com/certificates/L4PQ8NRRVZO1",
    },
    {
      name: "Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: sql,
      verifyUrl: "https://www.dicoding.com/certificates/0LZ0RVYNNP65",
    },
];

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sertifikasi & Prestasi
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Validasi keahlian dan komitmen saya terhadap pembelajaran berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// --- Sub-Component untuk Kartu Sertifikasi yang Lebih Clean ---

const CertificationCard = ({ cert, index }) => (
  <a 
    href={cert.verifyUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 ease-out animate-fade-in-up hover:-translate-y-1.5 hover:shadow-xl hover:shadow-foreground/5"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Menggunakan aspect-ratio untuk ukuran gambar yang konsisten */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={cert.image}
        alt={cert.name}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>

    <div className="p-5 flex flex-col flex-grow">
      {/* Judul dibatasi 2 baris agar tinggi kartu konsisten */}
      <h3 className="text-lg font-semibold text-foreground mb-2 h-14 line-clamp-2">
        {cert.name}
      </h3>
      
      {/* Ikon Award diintegrasikan dengan nama penerbit */}
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Award className="h-4 w-4 flex-shrink-0" />
        <span>{cert.issuer}</span>
      </p>

      {/* Bagian bawah kartu (footer) yang selalu rata */}
      <div className="mt-auto pt-4 flex justify-between items-center text-sm">
        <span className="px-2.5 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
          {`Diterbitkan ${cert.date}`}
        </span>
        <span className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Verifikasi <ArrowUpRight className="h-4 w-4 ml-1" />
        </span>
      </div>
    </div>
  </a>
);

export default CertificationsPage;