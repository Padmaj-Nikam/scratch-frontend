function Error({ statusCode }: { statusCode?: number }) {
  return (
    <p className="text-center mt-20">
      {statusCode
        ? `An error ${statusCode} occurred`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;