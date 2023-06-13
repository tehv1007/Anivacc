import React from 'react'

export default function GuideBody() {
    return (
        <div class="table mt-6 w-full text-[#545454] font-poppins border border-[#dddddd] border-solid border-collapse shadow-[0_-1px_91px_12px_rgba(0,0,0,0.2)] mb-12">
            <div class="table-header-group ">
                <div class="table-row font-semibold">
                    <div class="table-cell text-left p-2">Name</div>
                    <div class="table-cell text-left p-2">Size</div>
                    <div class="table-cell text-left p-2">Downloads</div>
                    <div class="table-cell text-left p-2">Update</div>
                    <div class="table-cell text-left p-2">Download</div>
                </div>
            </div>
            <div class="table-row-group">
                <div class="table-row font-extralight border-t-[1px] border-collapse border-solid border-[#dddddd]">
                    <div class="table-cell text-left p-2">Sinder Poster - Mid East.pdf</div>
                    <div class="table-cell text-left p-2">348KB</div>
                    <div class="table-cell text-left p-2">4</div>
                    <div class="table-cell text-left p-2">2023-01-16</div>
                    <div class="table-cell text-left p-2">
                        <button className='text-white bg-[#003d79] leading-8 rounded-full px-[15px]'>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
