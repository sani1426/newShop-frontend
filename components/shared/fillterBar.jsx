

import React from 'react'

const FillterBar = () => {
  return (
   <section className='w-full bg_soft py-8 px-12'>
    <div className="mx auto bg_main rounded-md">
        <form className='flex-center gap-6' >
            
            <select   className='px-4 py-3 border-2 focus:border-grown-100 rounded-md'>
                <option >فیلم/سریال</option>
                <option value="movie">فیلم</option>
                <option value="tv">سریال</option>
            </select>
            <select   className='px-4 py-3 border-2 focus:border-grown-100 rounded-md'  >
                <option >انتخاب ژانر</option>
                <option value="اکشن">اکشن</option>
                <option value="عاشقانه">عاشقانه</option>
                <option value="ماجراجویی">ماجراجویی</option>
                <option value="درام">درام</option>
                <option value="علمی تخیلی">علمی تخیلی</option>
                <option value="فانتزی">فانتزی</option>
                <option value="معمایی">معمایی</option>
                <option value="ترسناک">ترسناک</option>
                <option value="کمدی">کمدی</option>
            </select>
            <select   className='px-4 py-3 border-2 focus:border-grown-100 rounded-md ' >
                <option >مرتب سازی</option>
                <option value="محبوب ترین">محبوب ترین ها</option>
                <option value="بالاترین امتیاز">بالاترین امتیاز</option>
                <option value="جدیدترین">جدیدترین ها</option>
            </select>

            <button className=' primary  text-white dark:text-black px-4 py-3 rounded-sm '>
                جستجو
            </button>
        </form>
    </div>

   </section>
  )
}

export default FillterBar