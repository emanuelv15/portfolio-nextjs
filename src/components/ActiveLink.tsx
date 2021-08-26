import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath.substr(1) === rest.href) {
    isActive = true;
    console.log(asPath, rest.href);
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "gray.800" : "pink.50",
      })}
    </Link>
  );
}
