import React from 'react'

const FilterSelect = ({ label, value, onChange, options, theme }) => (
  <label className='flex flex-col gap-2'>
    <span className='text-xs uppercase tracking-[0.25em] text-[#9a5a33]'>{label}</span>
    <select
      value={value}
      onChange={onChange}
      className={`rounded-full px-4 py-3 text-sm outline-none transition ${theme === 'dark' ? 'border border-white/10 bg-[#111111] text-[#fff3e7] focus:border-[#f4a261]' : 'border border-[#ebd8cf] bg-[#fff7f1] text-[#4a1834] focus:border-[#d47b2f]'}`}
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </label>
)

export default FilterSelect
