import clsx from 'clsx';

export default function EquilibriumImage() {
  return (
    <div class="relative group col-span-2 rounded-2xl overflow-hidden">
      <img
        src="/images/image-equilibrium.jpg"
        alt="equilibrium"
      />
      <button
        type="button"
        class={clsx(
          'before:(c_ i-my-view size-16)',/* before element */
          'bg-c-cyan/50 absolute size-1/1 inset-(t-0 l-0)',/* main */
          'opacity-0 transition-opacity duration-500 group-hover:opacity-100',/* animation */
        )}
        aria-label="open"
      />
    </div>
  );
}
