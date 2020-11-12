const {repair} = require('./enhancer.js');
// test away!
describe('sanity check', ()=>{

    it('works', ()=>{
        expect(2).toBe(2)
    })
})

describe('repair function', ()=>{
    it('function is defined', ()=>{
      expect(repair()).toBeDefined()
    })
    it('returns an object', ()=>{
      expect(repair('item')).toBeInstanceOf(Object)
    })
    it('returns item with props name, durability, enhancement', ()=>{
        expect(repair(item)).toHaveProperty('name', 'durability', 'enhancement')
    })
    it('returns item with durability 100', ()=>{
        expect(repair(item.durability)).toEqual({durability: 100})
    })

  })