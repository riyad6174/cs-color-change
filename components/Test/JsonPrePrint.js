const JsonPrePrint = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
export default JsonPrePrint;