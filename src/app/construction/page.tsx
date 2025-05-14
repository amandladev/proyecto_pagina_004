import { Construction } from "lucide-react";

export default function ConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full">
        <Construction className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">¡En construcción!</h1>
        <p className="text-gray-600 text-lg">
          Estamos trabajando en esta sección para brindarte la mejor experiencia posible. 
          Vuelve pronto para ver las novedades.
        </p>
        <p className="mt-6 text-sm text-gray-400">Gracias por tu paciencia 💛</p>
      </div>
    </div>
  );
}
