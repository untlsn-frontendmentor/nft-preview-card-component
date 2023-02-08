import EquilibriumImage from '~/components/EquilibriumImage';

export default function Home() {
  return (
    <main class="min-h-screen bg-c-navy grid place-items-center">
      <article class="bg-c-blue text-white rounded-2xl w-100 max-w-95vw p-6 shadow-lg grid-(~ cols-2) gap-y-4">
        <EquilibriumImage />
        <h1 class="col-span-2 text-2xl font-bold cursor-pointer hocus:text-c-cyan">Equilibrium #3429</h1>
        <p class="col-span-2 text-c-silver">Our Equilibrium collection promotes balance and calm.</p>
        <p class="text-c-cyan font-bold before:(c_ i-my-ethereum w-3 h-5 mr-2)">0.041 ETH</p>
        <p class="text-(end c-silver) before:(c_ i-my-clock size-5 mr-2)">3 days left</p>

        <footer class="col-span-2 border-t-(1 c-silver) flex gap-6 items-center pt-4">
          <img src="/images/image-avatar.png" class="size-8 border-(1 white) rounded-full" alt="" />
          <p>
            <span class="text-c-silver">Creation of </span>
            <b class="cursor-pointer hocus:text-c-cyan">Jules Wyvern</b>
          </p>
        </footer>
      </article>
    </main>
  );
}
