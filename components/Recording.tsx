const Recording = () => {
  return (
    <div className="py-2 px-5 shadow-basic my-3">
      <h3 className="font-medium text-2xl mb-1">Запись №228</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Название файла</th>
            <th>Дата</th>
            <th>Кол-во ошибок</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Audio_blabla</td>
            <td>24.05.2024</td>
            <td>11</td>
            <td>-&gt;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Recording;
