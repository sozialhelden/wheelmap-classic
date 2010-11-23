xml = Builder::XmlMarkup.new(:indent => 1)
xml.instruct!
xml.error{
  xml.message(@message)
}