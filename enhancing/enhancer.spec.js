const {repair, success, fail} = require('./enhancer.js');
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

  describe('success function', ()=>{
    it('function is defined', ()=>{
      expect(success()).toBeDefined()
    })
    it('returns an object', ()=>{
      expect(success('item')).toBeInstanceOf(Object)
    })
    it('returns item with enhancement +1', ()=>{
        expect(success('tom', 20, 0)).toBe(1)
    })
    it('stops enhancement at 20', ()=>{
        expect(success('tom', 20, 20)).toBe(20)
    })
  })