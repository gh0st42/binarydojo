Binary Dojo
===========

Binary Dojo is a collection of web-based tools for my own personal use and potentially other (experienced) martial artists.
It is a work in progress, and new tools will be added over time. 
The tools are designed to be flexible and accessible from any device with a web browser.

Some of the modules currently available:
- Kihon repetition sets
- Kata of the Day
  - Shotokan
  - Goju Ryu
  - Shito Ryu
  - Wado Ryu
  - Kyokushin 
- Interval trainings
  - Kumite
  - Fitness
- Reflex training
  - Reactions on up to 9 random zones, with two optional colors per zone, e.g., respond to an attack or attack yourself
- Meditation timer
  - can also be used for timing rope skipping, standing in kiba dachi or just sitting in seiza.

*The projects does not teach you karate, but it can give you inspiration for solo training if you already know karate.*

**Use at your own risk!**

## History & Design Philosophy

This is a personal project of mine which started as a visual basic program on my desktop years ago. 
Later on I ported it to swift for an iOS app, to learn the programming language and use it more easily in the gym.
To share it more easily with friends and use it on other devices, I decided to port it to the web.

I am not a professional web dev nor a designer, I favor simplicity, flexibility and minimal dependencies.
Ideally the web app should even run without a webserver by just opening the html files from disk.
Most tools are kept generic and open, so you can provide your own techniques and exercises to perform, no need to hardcode every variation, e.g., in the interval trainings or kihon sessions.
So far, not all modules I had in the BASIC and swift versions were ported (yet).
No state is or should be persisted, this is not a training log, use your fitness tracker app or spreadsheet for that.

## Contributing

I welcome contributions from the community! 
But I don't want crazy complexity for stuff I cannot maintain in the long run and would never use in my own training.

Here are some ways you can get involved:

### Reporting Bugs
If you find a bug, please report it by opening an issue on our [GitHub Issues](https://github.com/gh0st42/binarydojo/issues) page. Provide as much detail as possible, including steps to reproduce the issue and any relevant logs or screenshots.
Remember this is just a personal project developed in my free time, so responses and fixes might take some time.

### Suggesting Features
Have an idea for a new feature? I'd love to hear it! Open an issue on our [GitHub Issues](https://github.com/gh0st42/binarydojo/issues) page and describe your idea in detail. Even better, provide a pull request with the feature you suggested yourself :)

### Submitting Pull Requests
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request on our [GitHub Pull Requests](https://github.com/your-repo/pulls) page.

### Code Style

Code should be kept simple and readable, no external dependencies, no nodejs or complex frameworks and all extra resources should be public domain if possible.

### Copyright

By contributing to this project, you agree to license your contributions under the same license as the project. This means that any code, documentation, or other content you submit will be available under the project's open source license.

Please ensure that your contributions are your own original work and that you have the right to license them under the project's open source license. If you include any third-party code or resources, make sure they are also compatible with the project's license.


Thank you for contributing to Binary Dojo!