class Float
    def ceil_to(i)
        f = (10 ** i).to_f
        nr = self * f
        return nr.ceil / f
    end
    
    def floor_to(i)
        f = (10 ** i).to_f
        nr = self * f
        return nr.floor / f
    end
end