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

  describe('fail function', ()=>{
    it('function is defined', ()=>{
      expect(fail()).toBeDefined()
    })
    it('returns an object', ()=>{
      expect(fail('item')).toBeInstanceOf(Object)
    })
    it('if enhancement <15, durability -5', ()=>{
        expect(fail('tom', 20, 0)).toBe(15)
    })
    it('if enhancement >15, durability -10', ()=>{
        expect(fail('tom', 20, 16)).toBe(10)
    })
    it('if enhancement >16, durability -10 && enhancement -1', ()=>{
        expect(fail('tom', 20, 17)).toBe(10, 16)
    })
  })