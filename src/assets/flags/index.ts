const importAll = (r: any) => {
  const svgs: any = {};
  r.keys().forEach((key: any) => {
    const name = key.replace("./", "").replace(".svg", "");
    svgs[name] = r(key).default; // Import the default export for each SVG
  });
  return svgs;
};

const Flags = importAll(require.context("./", false, /\.svg$/));

export default Flags;
