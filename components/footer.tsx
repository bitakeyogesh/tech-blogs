import Container from "./container";

export default function Footer(props) {
  return (
    <Container>
      <div className="mt-10 border-t border-gray-100 dark:border-gray-800">
        <div className="text-sm text-center px-8 py-5">
          Copyright © {new Date().getFullYear()} {props?.copyright}. All
          rights reserved.
        </div>
      </div>

    </Container>
  );
}