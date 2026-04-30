import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/aimri/Navbar";
import Footer from "@/components/aimri/Footer";
import { Lock } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() !== "") {
      localStorage.setItem("isAimriMember", "true");
      toast.success("Login berhasil", { description: "Selamat datang di Direktori Anggota AIMRI." });
      navigate("/members");
    } else {
      toast.error("Gagal", { description: "Silakan masukkan kata sandi." });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-20 px-4">
        <div className="w-full max-w-md bg-card border border-border rounded-sm p-8 shadow-card-elegant animate-fade-in">
          <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-6 h-6 text-copper" />
          </div>
          <h1 className="font-display font-bold text-2xl text-center text-foreground mb-2">
            Akses Khusus Anggota
          </h1>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Silakan masukkan kata sandi (mock: ketik apa saja) untuk mengakses direktori lengkap anggota AIMRI.
          </p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Kata Sandi Anggota"
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-copper transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" variant="copper" className="w-full py-6">
              Masuk
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
