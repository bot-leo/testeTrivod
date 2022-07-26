import { useEffect, useState } from "react"

export default function Home() {
  const [options, setOptions] = useState({})
  const [size, setSize] = useState()
  const [color, setColor] = useState()

  const colorList = Array.from(new Set(Object.values(options).flat())).sort()
  const sizeList = Object.entries(options).filter(([_, value])=> value.includes(color)).map(([key])=> key).sort()

  const url = 'https://gist.githubusercontent.com/jeffdrumgod/82ce318339d591768356793fed9dd443/raw/918978b8b743c90a0d48c2f0ccbb226b2848b1ce/vtex-skujson-example.json'

  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      return response.json()
      })
    .then(data =>{
      const optionsData = data.skus.map(sku =>({
        tamanho: sku.dimensions.Tamanho,
      }))
      const optionsWidthColor = optionsData.reduce((acc, next) => ({
        ...acc,
        [next.tamanho] : data.skus.filter(item => item.dimensions.Tamanho === next.tamanho).map(item => item.dimensions.COR)
      }),{})
      setOptions(optionsWidthColor)
    })
  },[])

  function handleSelectColor(event){
    setColor(event.target.value)
    setSize()
  }

  function handleSelectSize(event){
    setSize(event.target.value)
  }

  return (
    <form>
      <h2>Cores disponiveis:</h2>
      <ul>
      {colorList.map((colorItem, index) =>{
        return(
            <li key={index}>
              <label>{colorItem}</label>
              <input type="radio" name="color" checked={color === colorItem } value={colorItem} onChange={handleSelectColor}/>
            </li>
        )
      })}
      </ul>
      
      <h2>Os tamanhos são:</h2>
      <ul>
      {
        sizeList?.map((dimension) =>{
          return(
              <li key={dimension}>
                <label>{dimension}</label>
                <input type="radio" name='Tamanho' value={dimension} checked={dimension === size} onChange={handleSelectSize}/>
              </li>
          )
        })
      }
      </ul>
    </form>
  )
}
