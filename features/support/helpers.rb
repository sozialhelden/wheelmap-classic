
def fix_searchresult_boundingbox(hash)
  hash[:boundingbox] = (eval hash[:boundingbox]).map(&:to_s)
end