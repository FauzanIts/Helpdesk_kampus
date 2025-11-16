"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, GraduationCap, Users, Clock, Bell, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Sistem Pengajuan Dokumen
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Universitas Tadulako</p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Beranda
              </Link>
              <Link href="/submit" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Ajukan Dokumen
              </Link>
              <Link href="/track" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Lacak Status
              </Link>
              <Link href="/admin/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/universitas-tadulako-bg.jpg"
            alt="Universitas Tadulako"
            layout="fill"
            objectFit="cover"
            className="dark:opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Sistem Resmi Universitas Tadulako
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Pengajuan Dokumen
              <span className="block text-blue-600 dark:text-blue-400">Lebih Mudah</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Platform digital modern untuk memudahkan mahasiswa mengajukan berbagai jenis dokumen 
              surat keterangan dengan cepat, efisien, dan transparan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/submit">
                <Button size="lg" className="w-full sm:w-auto group">
                  Mulai Pengajuan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/track">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Lacak Pengajuan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Memilih Sistem Kami?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nikmati kemudahan dan kenyamanan dalam mengajukan dokumen administrasi kampus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">Mudah & Cepat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Proses pengajuan dokumen menjadi lebih mudah tanpa perlu antri di loket. 
                  Ajukan dokumen kapan saja dan di mana saja.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Pantau status pengajuan Anda secara real-time. 
                  Tahu persis di mana posisi dokumen Anda sedang diproses.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">Notifikasi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Dapatkan pemberitahuan instan saat dokumen Anda selesai diproses. 
                  Tidak perlu bolak-balik menanyakan status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mulai Sekarang
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Pilih aksi yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className={`group cursor-pointer transition-all duration-500 ${
                hoveredCard === 'submit' 
                  ? 'transform scale-105 shadow-2xl border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' 
                  : 'hover:shadow-xl border-gray-200 dark:border-gray-700'
              }`}
              onMouseEnter={() => setHoveredCard('submit')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Ajukan Dokumen
                </CardTitle>
                <CardDescription className="text-base">
                  Ajukan berbagai jenis dokumen surat keterangan yang Anda butuhkan
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Link href="/submit">
                  <Button size="lg" className="w-full group-hover:bg-blue-600 transition-colors">
                    Mulai Pengajuan
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card 
              className={`group cursor-pointer transition-all duration-500 ${
                hoveredCard === 'track' 
                  ? 'transform scale-105 shadow-2xl border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20' 
                  : 'hover:shadow-xl border-gray-200 dark:border-gray-700'
              }`}
              onMouseEnter={() => setHoveredCard('track')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Lacak Status
                </CardTitle>
                <CardDescription className="text-base">
                  Pantau perkembangan pengajuan dokumen Anda secara real-time
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Link href="/track">
                  <Button size="lg" variant="outline" className="w-full group-hover:border-green-600 group-hover:text-green-600 transition-colors">
                    Lacak Pengajuan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admin Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Area Administrator
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Untuk staf Tata Usaha yang akan memproses pengajuan dokumen dari mahasiswa
            </p>
            <Link href="/admin/login">
              <Button size="lg" variant="outline" className="group">
                Login Admin
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sistem Pengajuan Dokumen</h3>
                  <p className="text-sm text-gray-400">Universitas Tadulako</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Platform digital modern untuk memudahkan pengajuan dokumen administrasi kampus 
                dengan cepat, efisien, dan transparan.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/submit" className="hover:text-white transition-colors">Ajukan Dokumen</Link></li>
                <li><Link href="/track" className="hover:text-white transition-colors">Lacak Status</Link></li>
                <li><Link href="/admin/login" className="hover:text-white transition-colors">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Sistem Pengajuan Dokumen. Universitas Tadulako. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}