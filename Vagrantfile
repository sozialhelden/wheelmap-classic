# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  # Expose a port so the application can be tested.
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  # Required for NFS to work, pick any local IP
  config.vm.network :private_network, ip: '192.168.50.50'
  # Use NFS for shared folders for better performance
  config.vm.synced_folder '.', '/vagrant', nfs: true

  # Forwards the SSH agent so your keys work.
  config.ssh.forward_agent = true

  # Ensure the VM has enough power to do its job.
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
  end

  config.vm.provider "vmware_fusion" do |v|
   v.vmx["memsize"] = "2048"
   v.vmx["numvcpus"] = "2"
  end

  # Provision the necessary dependencies.
  config.vm.provision "shell", path: "vagrant/privileged_setup.sh"
  config.vm.provision "shell", path: "vagrant/unprivileged_setup.sh", privileged: false
end
