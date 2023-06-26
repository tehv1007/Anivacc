export default function GuideBody() {
  return (
    <div className="table mt-6 w-full text-[#545454] font-poppins border border-[#dddddd] border-solid border-collapse shadow-[0_-1px_91px_12px_rgba(0,0,0,0.2)] mb-12">
      <div className="table-header-group ">
        <div className="table-row font-semibold">
          <div className="table-cell text-left p-2">Name</div>
          <div className="table-cell text-left p-2">Size</div>
          <div className="table-cell text-left p-2">Downloads</div>
          <div className="table-cell text-left p-2">Update</div>
          <div className="table-cell text-left p-2">Download</div>
        </div>
      </div>
      <div className="table-row-group">
        <div className="table-row font-extralight border-t-[1px] border-collapse border-solid border-[#dddddd]">
          <div className="table-cell text-left p-2">
            AnivacC - Catalogue.pdf
          </div>
          <div className="table-cell text-left p-2">348KB</div>
          <div className="table-cell text-left p-2">4</div>
          <div className="table-cell text-left p-2">2023-01-16</div>
          <div className="table-cell text-left p-2">
            <a
              href="/path/to/your/attachment.pdf"
              className="text-white bg-[#003d79] leading-8 rounded-full px-[15px] inline-block"
              download // Thuộc tính "download" để tải xuống tệp
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
