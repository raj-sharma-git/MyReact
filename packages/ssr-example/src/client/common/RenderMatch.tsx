import { Container } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import { useRoutes } from "react-router";

import { allRoutes } from "@client/router";
import { getIsAnimateRouter } from "@shared";

import { useLoadedLocation } from "./WrapperRoute";

export const RenderMatch = () => {
  const loaded = useLoadedLocation();
  const all = useRoutes(allRoutes, loaded?.location);

  return (
    <Container minWidth={"container.lg"}>
      {getIsAnimateRouter() ? (
        <AnimatePresence exitBeforeEnter>
          <Fragment key={loaded?.location.pathname}>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={{
                initial: {
                  opacity: 0,
                },
                in: {
                  opacity: 1,
                },
                out: {
                  opacity: 0,
                },
              }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 50,
              }}
            >
              {all}
            </motion.div>
          </Fragment>
        </AnimatePresence>
      ) : (
        all
      )}
    </Container>
  );
};
