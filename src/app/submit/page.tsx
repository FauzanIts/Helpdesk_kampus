"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function SubmitDocument() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [formData, setFormData] = useState({
    documentType: "",
    title: "",
    purpose: "",
    studentName: "",
    studentNim: "",
    studentEmail: "",
    studentPhone: "",
    notes: "",
    file: null as File | null,
  });

  const documentTypes = [
    { id: "1", name: "Surat Keterangan Aktif Kuliah", description: "Untuk keperluan beasiswa, pengajuan KIP, dll" },
    { id: "2", name: "Surat Keterangan Lulus", description: "Untuk keperluan melamar kerja, lanjut studi, dll" },
    { id: "3", name: "Surat Keterangan Pindah Kuliah", description: "Untuk pindah ke universitas lain" },
    { id: "4", name: "Surat Keterangan Cuti Kuliah", description: "Untuk mengajukan cuti sementara" },
    { id: "5", name: "Surat Keterangan Bebas Pinjaman", description: "Untuk bukti bebas pinjaman perpustakaan/lab" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate random tracking code
      const generatedCode = `DOC-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setTrackingCode(generatedCode);
      setIsSubmitted(true);

      toast({
        title: "Pengajuan Berhasil",
        description: "Dokumen Anda telah berhasil diajukan. Simpan kode tracking Anda.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat mengajukan dokumen. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.documentType && 
                     formData.title && 
                     formData.purpose && 
                     formData.studentName && 
                     formData.studentNim && 
                     formData.studentEmail;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <CardTitle className="text-2xl text-green-600 dark:text-green-400">
                Pengajuan Berhasil!
              </CardTitle>
              <CardDescription>
                Dokumen Anda telah berhasil diajukan dan sedang dalam proses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <Label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Kode Tracking Anda
                </Label>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-lg p-3">
                    {trackingCode}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Simpan kode ini dengan baik untuk melacak status pengajuan Anda
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link href="/track">
                  <Button variant="outline" className="w-full">
                    Lacak Status
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="w-full">
                    Kembali ke Beranda
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Formulir Pengajuan Dokumen
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <span>Ajukan Dokumen Baru</span>
            </CardTitle>
            <CardDescription>
              Isi formulir berikut untuk mengajukan dokumen yang Anda butuhkan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Document Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="documentType">Jenis Dokumen *</Label>
                <Select value={formData.documentType} onValueChange={(value) => handleInputChange("documentType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis dokumen" />
                  </SelectTrigger>
                  <SelectContent>
                    {documentTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        <div>
                          <div className="font-medium">{type.name}</div>
                          <div className="text-sm text-gray-500">{type.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Document Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Judul Dokumen *</Label>
                <Input
                  id="title"
                  placeholder="Contoh: Surat Keterangan Aktif Kuliah untuk Beasiswa"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                />
              </div>

              {/* Purpose */}
              <div className="space-y-2">
                <Label htmlFor="purpose">Tujuan Pengajuan *</Label>
                <Textarea
                  id="purpose"
                  placeholder="Jelaskan tujuan pengajuan dokumen ini..."
                  value={formData.purpose}
                  onChange={(e) => handleInputChange("purpose", e.target.value)}
                  required
                />
              </div>

              {/* Student Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Nama Lengkap *</Label>
                  <Input
                    id="studentName"
                    placeholder="Masukkan nama lengkap"
                    value={formData.studentName}
                    onChange={(e) => handleInputChange("studentName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentNim">NIM *</Label>
                  <Input
                    id="studentNim"
                    placeholder="Masukkan NIM"
                    value={formData.studentNim}
                    onChange={(e) => handleInputChange("studentNim", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentEmail">Email *</Label>
                  <Input
                    id="studentEmail"
                    type="email"
                    placeholder="email@untad.ac.id"
                    value={formData.studentEmail}
                    onChange={(e) => handleInputChange("studentEmail", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentPhone">Nomor Telepon</Label>
                  <Input
                    id="studentPhone"
                    placeholder="08123456789"
                    value={formData.studentPhone}
                    onChange={(e) => handleInputChange("studentPhone", e.target.value)}
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file">Upload Dokumen Pendukung</Label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Klik untuk upload atau drag and drop file
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PDF, DOC, DOCX (max 10MB)
                  </p>
                  <Input
                    id="file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => document.getElementById("file")?.click()}
                  >
                    Pilih File
                  </Button>
                  {formData.file && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      File: {formData.file.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Catatan Tambahan</Label>
                <Textarea
                  id="notes"
                  placeholder="Masukkan catatan tambahan jika diperlukan..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <Link href="/">
                  <Button type="button" variant="outline">
                    Batal
                  </Button>
                </Link>
                <Button 
                  type="submit" 
                  disabled={!isFormValid || isSubmitting}
                  className="min-w-[120px]"
                >
                  {isSubmitting ? "Mengajukan..." : "Ajukan Dokumen"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}