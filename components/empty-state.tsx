import { ButtonLink } from "@/components/button-link";

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="surface rounded-sm p-8 text-center">
      <h2 className="font-editorial text-3xl text-[#F4F0E8]">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-[#B9B5AD]">{message}</p>
      <ButtonLink href="/contato" variant="secondary" className="mt-6">
        Falar sobre materiais
      </ButtonLink>
    </div>
  );
}
