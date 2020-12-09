# 构建 Nethermind

## 集成开发环境（可选）

* [JetBrains Rider](https://www.jetbrains.com/rider/)
* [VS Code](https://code.visualstudio.com/docs/other/dotnet)

## 软件开发工具包

您需要使用  **.NET SDK 3.1**  构建 Nethermind。请点击下方链接下载\（请确保您选择的是正确的平台和发行版本\）：

{% embed url="https://dotnet.microsoft.com/download" caption=".NET SDK for Linux, macOS, Windows" %}

## Linux

{% tabs %}
{% tab title="Linux \(Ubuntu 18.04+/Debian 10\)" %}
```text
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6
```
{% endtab %}

{% tab title="Linux \(Ubuntu 16.04\)" %}
```text
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 && \
sudo add-apt-repository ppa:ubuntu-toolchain-r/test && \
sudo apt-get update && \
sudo apt-get install gcc-6 g++-6 && \
sudo apt install libzstd1
```
{% endtab %}

{% tab title="Linux \(CentOS 8\)" %}
```text
sudo yum install -y glibc-devel && \
sudo yum install bzip2-devel && \
sudo yum install -y libzstd && \
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
```
{% endtab %}

{% tab title="Linux \(Fedora 31\)" %}
```text
sudo yum install -y glibc-devel && \
sudo yum install -y snappy && \
sudo yum install -y libzstd && \
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
```
{% endtab %}
{% endtabs %}

## MacOS

```text
brew install gmp && brew install snappy && brew install lz4
```

## Windows

您可能需要安装 [https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

## 所有平台 

{% hint style="warning" %}
如果您没有找到 dotnet 命令，可能是因为没有安装 SDK（参见上述说明）
{% endhint %}

{% hint style="info" %}
在 Linux 发行版上，我们建议您在该阶段启动 screen，以便稍后使用screen -rd命令返回会话。
{% endhint %}

克隆 Nethermind 的代码库及其子模块，然后在 `Release` 或 `Debug` 模式下构建 Nethermind。

```bash
git clone https://github.com/NethermindEth/nethermind.git --recursive
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```

启动 goerli 测试网来进行快速同步和测试

```bash
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config goerli
```

您可以点击下方链接确认 goerli 测试网的最新区块：

{% embed url="https://blockscout.com/eth/goerli/" caption="" %}

或通过以下命令运行以太坊主网：

```text
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config mainnet
```

## 潜在问题

如果您安装的是旧的 .NET Core 预发行版本，可能会引发冲突。由于这种情况非常特殊，您最好寻求在线帮助。
