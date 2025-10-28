import { useState, useEffect } from "react";
import { CheckCircle2, Play } from "lucide-react";

export default function BotaoComLoadingBonito() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: number | undefined;
    let interval: number | undefined;

    if (loading) {
      setSuccess(false);
      setProgress(0);

      // brra de progresso
      interval = window.setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 2 : 100));
      }, 100);

      // 5s
      timer = window.setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setProgress(100);
        clearInterval(interval);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [loading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="flex flex-col items-center gap-6 w-80">
        <button
          onClick={handleClick}
          disabled={loading}
          className={`relative flex items-center justify-center gap-3 text-lg px-10 py-4 rounded-2xl font-semibold text-white shadow-lg overflow-hidden transition-all duration-300
            ${
              loading
                ? "bg-blue-400 cursor-not-allowed scale-95"
                : success
                ? "bg-green-600 hover:bg-green-700 hover:scale-105"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
            }`}
        >
          {loading ? (
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" />
              </div>
              <span className="animate-pulse">A carregar...</span>
            </div>
          ) : success ? (
            <>
              <CheckCircle2 className="w-6 h-6 text-green-200 animate-pulse" />
              <span className="animate-fade-in">Concluído!</span>
            </>
          ) : (
            <>
              <Play className="w-6 h-6" />
              Iniciar
            </>
          )}

          {loading && (
            <div
              className="absolute bottom-0 left-0 h-1 bg-blue-800 transition-all ease-linear"
              style={{ width: `${progress}%` }}
            />
          )}
        </button>

        {success && (
          <p className="text-green-600 font-medium animate-fade-in">
            Conteúdo
          </p>
        )}
      </div>
    </div>
  );
}
