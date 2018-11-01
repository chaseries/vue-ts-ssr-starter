import Vue from "vue";
import { createApp } from "./main";
import { foo } from "SRC/delete-me.js";


interface context {
  url: string;
}

export default (ctx: context) => {
  return new Promise((res, rej) => {
    const { app, router, store } = createApp();

    router.push(ctx.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) { return rej({ code: 404 }); }

      Promise.all(matchedComponents.map((c) => {
        if (c) {
          return 1;
          // return c.asyncData({
            // store: store,
            // route: router.currentRoute
          // });
        } else {
          return 0;
        }
      }));
    });
  });
};
