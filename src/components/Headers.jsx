const Headers = () => {
  return (
    <thead class="thead-dark">
      <tr>
        <th
          scope="col"
          style={{
            width: "30%",
            paddingLeft: "25px",
            fontFamily: "Syne Mono",
          }}
          class="h4"
        >
          TITLE
        </th>
        <th
          scope="col"
          style={{ width: "20%", fontFamily: "Syne Mono" }}
          class="h4"
        >
          Normal Price
        </th>
        <th
          scope="col"
          style={{ width: "15%", fontFamily: "Syne Mono" }}
          class="h4"
        >
          Sale Price
        </th>
      </tr>
    </thead>
  );
};

export default Headers;
