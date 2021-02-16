import * as Styles from './styles'

export default function SSR({ framework }) {
  return <Styles.Style>{framework} ssr example</Styles.Style>;
}

export function getServerSideProps() {
  return {
    props: { framework: "preact" },
  };
}
