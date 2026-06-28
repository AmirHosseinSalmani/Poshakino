function DetailsProducts({ details }) {
  return (
    <div>
      <div className="text-eticet font-lalezar border-b border-foterli py-5">
        Poshakino
      </div>
      <p className="border-b border-foterli py-5">
        دارای نماد اعتماد الکترونیک از وزارت صنعت معدن و تجارت
      </p>
      <p className="border-b border-foterli py-5">ضمانت اصالت کالا</p>
      <p className="py-5">{details.count} انبار</p>
    </div>
  );
}

export default DetailsProducts;
