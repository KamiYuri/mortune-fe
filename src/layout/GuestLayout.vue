<template>
  <div class="flex flex-col items-center h-full relative">
    <div class="w-fit h-full mt-40 flex flex-col items-center space-y-8">
      <img
        src="@/assets/img/horizontal_logo.png"
        alt="footer"
        class="pointer-events-none select-none w-fit"
      />
      <RouterView />
    </div>
    <div class="w-full">
      <img
        src="@/assets/img/guest_footer.png"
        alt="footer"
        class="pointer-events-none select-none w-full block max-h-20 min-h-8"
      />
    </div>
  </div>
</template>
