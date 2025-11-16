"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Search, ArrowLeft, Clock, CheckCircle, AlertCircle, FileText, User, Calendar } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

interface DocumentStatus {
  id: string;
  trackingCode: string;
  title: string;
  documentType: string;
  studentName: string;
  studentNim: string;
  status: "SUBMITTED" | "IN_REVIEW" | "APPROVED" | "REJECTED" | "COMPLETED";
  submittedAt: string;
  processedAt?: string;
  completedAt?: string;
  rejectionReason?: string;
  notes?: string;
}

export default function TrackDocument() {
  const { toast } = useToast();
  const [trackingCode, setTrackingCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [documentStatus, setDocumentStatus] = useState<DocumentStatus | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) {
      toast({
        title: "Error",
        description: "Masukkan kode tracking terlebih dahulu",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock data for demonstration
      const mockData: DocumentStatus = {
        id: "1",
        trackingCode: trackingCode.toUpperCase(),
        title: "Surat Keterangan Aktif Kuliah untuk Beasiswa",
        documentType: "Surat Keterangan Aktif Kuliah",
        studentName: "Ahmad Rizki Pratama",
        studentNim: "210123456",
        status: "IN_REVIEW",
        submittedAt: "2025-01-15T10:30:00Z",
        processedAt: "2025-01-16T14:20:00Z",
        notes: "Dokumen sedang diverifikasi oleh bagian Rektorat"
      };

      setDocumentStatus(mockData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat mencari dokumen. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "SUBMITTED": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "IN_REVIEW": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "APPROVED": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "REJECTED": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "COMPLETED": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "SUBMITTED": return "Diajukan";
      case "IN_REVIEW": return "Dalam Review";
      case "APPROVED": return "Disetujui";
      case "REJECTED": return "Ditolak";
      case "COMPLETED": return "Selesai";
      default: return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "SUBMITTED": return <Clock className="h-4 w-4" />;
      case "IN_REVIEW": return <Clock className="h-4 w-4" />;
      case "APPROVED": return <CheckCircle className="h-4 w-4" />;
      case "REJECTED": return <AlertCircle className="h-4 w-4" />;
      case "COMPLETED": return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getProgressPercentage = (status: string) => {
    switch (status) {
      case "SUBMITTED": return 20;
      case "IN_REVIEW": return 50;
      case "APPROVED": return 80;
      case "REJECTED": return 100;
      case "COMPLETED": return 100;
      default: return 0;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
                Lacak Status Pengajuan
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!documentStatus ? (
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle className="text-2xl">Lacak Status Dokumen</CardTitle>
              <CardDescription>
                Masukkan kode tracking yang Anda dapatkan saat mengajukan dokumen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trackingCode">Kode Tracking</Label>
                  <Input
                    id="trackingCode"
                    placeholder="Contoh: DOC-ABC123XYZ"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="text-center text-lg font-mono"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSearching}
                >
                  {isSearching ? "Mencari..." : "Lacak Dokumen"}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Document Header */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{documentStatus.title}</CardTitle>
                    <CardDescription className="mt-2">
                      Kode Tracking: <Badge variant="outline">{documentStatus.trackingCode}</Badge>
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(documentStatus.status)}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(documentStatus.status)}
                      <span>{getStatusText(documentStatus.status)}</span>
                    </div>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {documentStatus.documentType}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {documentStatus.studentName} ({documentStatus.studentNim})
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Pengajuan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={getProgressPercentage(documentStatus.status)} className="h-2" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${
                        documentStatus.status === "SUBMITTED" || 
                        documentStatus.status === "IN_REVIEW" || 
                        documentStatus.status === "APPROVED" || 
                        documentStatus.status === "COMPLETED"
                          ? "bg-blue-500" : "bg-gray-300"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Diajukan</p>
                        <p className="text-xs text-gray-500">{formatDate(documentStatus.submittedAt)}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${
                        documentStatus.status === "IN_REVIEW" || 
                        documentStatus.status === "APPROVED" || 
                        documentStatus.status === "COMPLETED"
                          ? "bg-yellow-500" : "bg-gray-300"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Dalam Review</p>
                        {documentStatus.processedAt && (
                          <p className="text-xs text-gray-500">{formatDate(documentStatus.processedAt)}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${
                        documentStatus.status === "APPROVED" || 
                        documentStatus.status === "COMPLETED"
                          ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Disetujui</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${
                        documentStatus.status === "COMPLETED"
                          ? "bg-green-500" : "bg-gray-300"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Selesai</p>
                        {documentStatus.completedAt && (
                          <p className="text-xs text-gray-500">{formatDate(documentStatus.completedAt)}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            {documentStatus.notes && (
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Tambahan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {documentStatus.notes}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Rejection Reason */}
            {documentStatus.status === "REJECTED" && documentStatus.rejectionReason && (
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-600 dark:text-red-400">Alasan Penolakan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {documentStatus.rejectionReason}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  setDocumentStatus(null);
                  setTrackingCode("");
                }}
              >
                Cari Dokumen Lain
              </Button>
              <Link href="/">
                <Button>Kembali ke Beranda</Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}