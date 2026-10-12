import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.18em] text-[#C6A66B]">404</p>
        <h1 className="mt-4 font-editorial text-6xl text-[#F4F0E8]">Página não encontrada</h1>
        <p className="mx-auto mt-5 max-w-xl text-[#B9B5AD]">
          O endereço pode ter mudado ou o conteúdo ainda não está público.
        </p>
        <ButtonLink href="/" className="mt-8">Voltar para a home</ButtonLink>
      </div>
    </section>
  );
}
